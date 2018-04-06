/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('has been defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* It tests to make sure that each feed in the
         * allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.legth).not.toBe(0);
            });
        });

        /* It tests to make sure that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name has been defined', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
        it('name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /* This is our second test suite that named "The menu" */
    describe('The menu', function() {
        var $htmlBody = $(window.document.body);

        /* It tests to make sure that the menu element is
         * hidden by default.
         */
        it('the menu element is hidden by default', function() {
            expect($htmlBody.hasClass('menu-hidden')).toBe(true);
        });

        /* It tests to make sure that the menu changes
         * visibility when the menu icon is clicked. This test
         * have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('the menu changes visibility', function() {
        /* Trigger event on menu */
            $('.menu-icon-link').trigger('click');
            expect($htmlBody.hasClass('menu-hidden')).toBe(false);
        });
    });

    /* This is our third test suite that named "Initial Entries" */
    describe('Initial Entries', function() {
        /* It tests to make sure that when the loadFeed
         * function is called and completes its work.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* It tests to make sure that there is at least
         * a single .entry element within the .feed container.
         */
        it('has been loaded', function(done) {
            expect($('.feed').children().length).not.toBe(0);
            done();
        });
    });

    /* This is our fourth test suite that named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* It tests to make sure that when a new feed is loaded by the loadFeed
         * function that the content actually changes.
         */
        beforeEach(function(done) {
            loadFeed(1, function() {
                feed = $('.feed').html();
                done();
            });
        });
        it('content changes when a new feed is loaded', function(done) {
            loadFeed(0, function() {
                expect($('.feed').html()).not.toEqual(feed);
                done();
            });
        });
    });
}());
